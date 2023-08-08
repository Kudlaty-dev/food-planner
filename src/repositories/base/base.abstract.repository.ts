import { BaseInterfaceRepository } from './base.interface.repository';
import { DeleteResult, In, Repository } from 'typeorm';

export abstract class BaseAbstractRepository<T>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  public async findOneById(id: any): Promise<T> {
    const condition = { id: id };
    return await this.entity.findOne({ where: condition });
  }

  //To be implemented later
  // public async findByCondition(filterCondition: any): Promise<T> {
  //   return await this.entity.findOne({ where: filterCondition });
  // }

  public async findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations);
  }

  public async findManyByIds(idArr): Promise<T[]> {
    const query = this.entity
      .createQueryBuilder()
      .where('id IN (:...ids)', { ids: idArr });
    return await query.getMany();
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id);
  }

  public async update(id: any, data): Promise<T> {
    if (this.findOneById(id)) {
      return this.entity.save(data);
    }
  }
}

// [
//   '25e1854d-b487-4c4b-8565-e71bb3d108ca',
//   '4c8d39c8-cc60-4446-84fd-c9fada192435',
//   'f405bd8c-027d-4418-b086-718d80bc7a21',
//   '5e5b39fc-ccf8-4d8d-8bd9-486ddc3a58c7',
//   '5e7488ce-b737-4edf-975d-64ace06c0014',
// ]
