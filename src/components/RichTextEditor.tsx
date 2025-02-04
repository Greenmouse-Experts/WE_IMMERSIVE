import { useCallback, useState } from 'react';
import { Editable, withReact, Slate, useSlate } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
  BaseEditor,
  Descendant,
} from 'slate';
import { Button, Icon, Toolbar } from './components';
import { ReactEditor } from 'slate-react';
import { HistoryEditor, withHistory } from 'slate-history';

// Define a custom type for the editor

type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
type CustomElement = {
  type: string;
  align?: string;
  children: Descendant[];
  [key: string]: any;
};
type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const RichTextEditor = ({ onChange }: { onChange: (value: Descendant[]) => void }) => {
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const [editor] = useState(() => withHistory(withReact(createEditor())));

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={value => {
      onChange(value) // Pass editor content to parent component
    }}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </Toolbar>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="Enter some rich text…" spellCheck autoFocus />
    </Slate>
  );
};

const toggleBlock = (editor: CustomEditor, format: string) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type');
  const isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: (n: any) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n?.type) && !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  const newProperties: Partial<CustomElement> = TEXT_ALIGN_TYPES.includes(format)
    ? { align: isActive ? undefined : format }
    : { type: isActive ? 'paragraph' : isList ? 'list-item' : format };

  Transforms.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block: CustomElement = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor: CustomEditor, format: keyof Omit<CustomText, 'text'>) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor: CustomEditor, format: string, blockType: string = 'type') => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    })
  );
  return !!match;
};

const isMarkActive = (editor: CustomEditor, format: keyof Omit<CustomText, 'text'>) => {
  const marks = Editor.marks(editor) as Omit<CustomText, 'text'> | null;
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return <blockquote style={style} {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul style={style} {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 style={style} {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 style={style} {...attributes}>{children}</h2>;
    case 'list-item':
      return <li style={style} {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol style={style} {...attributes}>{children}</ol>;
    default:
      return <p style={style} {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.code) children = <code>{children}</code>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }: { format: string; icon: string }) => {
  const editor = useSlate();
  return (
    <Button active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')} onMouseDown={(event: { preventDefault: () => void; }) => {
      event.preventDefault();
      toggleBlock(editor, format);
    }}>
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }: { format: 'bold' | 'italic' | 'underline' | 'code'; icon: string }) => {
  const editor = useSlate();
  return (
    <Button active={isMarkActive(editor, format)} onMouseDown={(event: { preventDefault: () => void; }) => {
      event.preventDefault();
      toggleMark(editor, format);
    }}>
      <Icon>{icon}</Icon>
    </Button>
  );
};

const initialValue: Descendant[] = [{ type: 'paragraph', children: [{ text: 'Start typing...' }] }];
export default RichTextEditor;
