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
  category_Id : number | null
}

export interface Whole_Stock
{
  total_Books_Available : number;
  read_Stock : {
  book_Genre: string,
  total_Books_In_Category: number
  }[]
}

export interface User_Credentials
{
  user_Email : string,
  user_Password : string
}

export interface Jwt_Response
{
  email : string,
  token : string
}