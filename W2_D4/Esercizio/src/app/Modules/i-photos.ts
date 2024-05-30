export type Root = IPhotos[]

export interface IPhotos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
