import React from 'react'
import ReactDOM from 'react-dom'
import { cx, css } from '@emotion/css'

interface ButtonProps {
  className?: string;
  active?: boolean;
  reversed?: boolean;
  [key: string]: any;
}

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `
      )}
    />
  )
)
interface EditorValueProps {
  className?: string;
  value: any;
  [key: string]: any;
}

export const EditorValue = React.forwardRef<HTMLDivElement, EditorValueProps>(
  ({ className, value, ...props }, ref) => {
    const textLines = value.document.nodes
      .map((node: { text: any; }) => node.text)
      .toArray()
      .join('\n')
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    )
  }
)
interface IconProps {
  className?: string;
  [key: string]: any;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      'material-icons',
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
))
interface InstructionProps {
  className?: string;
  [key: string]: any;
}

export const Instruction = React.forwardRef<HTMLDivElement, InstructionProps>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `
    )}
  />
))
interface MenuProps {
  className?: string;
  [key: string]: any;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ className, ...props }, ref) => (
  <div
    {...props}
    data-test-id="menu"
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }

        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
))
export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}
interface ToolbarProps {
  className?: string;
  [key: string]: any;
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  />
))