using my.bookshop as mysrv from '../db/data-model';

service CatalogService {
  entity BooksSrv @readonly as projection on mysrv.Books;
  entity AuthorsSrv @readonly as projection on mysrv.Authors;
  entity OrdersSrv @insertonly as projection on mysrv.Orders;
}
