export type Music = {
    id: number,
    author: string,
    text: string
}

// Um tipo sem o id obrigatorio
export type MusicCadastrar = Omit<Music, 'id'>;