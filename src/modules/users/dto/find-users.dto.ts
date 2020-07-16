import { PaginationCursorAt, PaginationInput } from '@/graphql';

export class FindUsersPaginationDto implements PaginationInput {
  first?: number;
  last?: number;
  after?: string;
  before?: string;

  cursorAt?: PaginationCursorAt;

  constructor(paginationArgs: PaginationInput) {
    const { first, last } = paginationArgs;
    if (first && last) {
      throw new Error(
        "Passing both 'first' and 'last' to paginate is not supported",
      );
    }

    Object.assign(this, paginationArgs);
  }

  get convertedCursorAt(): string {
    if (this.cursorAt === PaginationCursorAt.ID) return 'id';
    if (this.cursorAt === PaginationCursorAt.CREATED_AT) return 'created_at';
    return 'id';
  }
}
