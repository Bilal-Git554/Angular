export interface Book_Details
{
  book_Id : number,
  book_Name : string,
  author_Name : string,
  about_Book : string,
  published_Date : string,
  category_Id : number,
  category :
  {
    category_Name : string,
    category_Id : number
  }
}

export interface Add_Book_Details
{
  book_Id : number,
  book_Name : string,
  author_Name : string,
  about_Book : string,
  published_Date : string,
  category_Id : number
}