import { Table, Model, Column, PrimaryKey, AllowNull, DataType } from 'npm:sequelize-typescript'

@Table({ tableName: 'movie', timestamps: false })
export class Movie extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @AllowNull(false)
  @Column({ field: 'release_date', type: DataType.DATEONLY })
  releaseDate: Date
}
