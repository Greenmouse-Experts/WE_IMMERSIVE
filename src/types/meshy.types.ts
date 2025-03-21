interface ModelUrls {
    glb: string;
    fbx: string;
    usdz: string;
    obj: string;
    mtl: string;
  }

  interface TextureUrl{
    base_color: string;
    metallic: string;  
    roughness: string;
    normal: string;
  }
  
  export interface IMeshiResponse {
    id: string;
    mode: string;
    name: string;
    seed: number;
    art_style: string;
    texture_richness: string;
    prompt: string;
    negative_prompt: string;
    texture_prompt: string;
    status: string;
    created_at: number;
    progress: number;
    started_at: number;
    finished_at: number;
    task_error: string | null;
    model_urls: ModelUrls;
    thumbnail_url: string;
    video_url: string;
    texture_urls:TextureUrl[];
  }
  