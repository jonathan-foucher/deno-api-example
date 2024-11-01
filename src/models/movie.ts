import { Table, Model, Column, PrimaryKey, AllowNull, DataType } from 'npm:sequelize-typescript'

export interface Movie {
  id: number
  title: string
  releaseDate: Date
}

@Table({ tableName: 'movie', timestamps: false })
export class MovieModel extends Model<Movie, Movie> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  declare title: string

  @AllowNull(false)
  @Column({ field: 'release_date', type: DataType.DATEONLY })
  declare releaseDate: Date
}
