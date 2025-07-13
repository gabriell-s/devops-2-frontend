export interface Book {
  public_id: string
  name: string
  edition: string
  isbn?: number
  publication_date?: Date
  description?: string
}
