import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthAccess = {
  __typename?: 'AuthAccess';
  accessToken: Scalars['String']['output'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type CreateOrderInput = {
  orderProducts: Array<OrderProductInput>;
  userId: Scalars['String']['input'];
};

export type CreateProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isAvailable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateUserInput = {
  addressComplement: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createProduct: Product;
  createUser: User;
  removeOrder: Order;
  removeProduct: Product;
  removeUser: User;
  signIn: AuthAccess;
  signUp: AuthAccess;
  updateOrder: Order;
  updateProduct: Product;
  updateUser: User;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: LoginInput;
};


export type MutationSignUpArgs = {
  signUpInput: UserRegisterInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['String']['output'];
};

export type OrderProductInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type Product = {
  __typename?: 'Product';
  averageRating?: Maybe<Scalars['Float']['output']>;
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  photos?: Maybe<Array<ProductPhoto>>;
  price: Scalars['Float']['output'];
  rating?: Maybe<Array<ProductRating>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPhoto = {
  __typename?: 'ProductPhoto';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type ProductRating = {
  __typename?: 'ProductRating';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAllProducts: Array<Product>;
  findAllUsers: Array<User>;
  findOneProduct: Product;
  findOneUser: User;
  me: AuthUser;
  order: Order;
  orders: Array<Order>;
};


export type QueryFindAllProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchProductParametersInput>;
};


export type QueryFindAllUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchUserParametersInput>;
};


export type QueryFindOneProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
};

export type SearchProductParametersInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type SearchUserParametersInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role: UserRole;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  id: Scalars['Int']['input'];
  orderProducts?: InputMaybe<Array<OrderProductInput>>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserInput = {
  addressComplement?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  addressComplement?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type UserRegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type FindAllProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchProductParametersInput>;
}>;


export type FindAllProductsQuery = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', id: string, name: string, price: number, category: string, averageRating?: number | null, photos?: Array<{ __typename?: 'ProductPhoto', id: string, url: string }> | null }> };

export type FindOneProductQueryVariables = Exact<{
  findOneProductId: Scalars['String']['input'];
}>;


export type FindOneProductQuery = { __typename?: 'Query', findOneProduct: { __typename?: 'Product', id: string, name: string, price: number, description: string, isAvailable: boolean, averageRating?: number | null, category: string, rating?: Array<{ __typename?: 'ProductRating', id: string, description?: string | null }> | null, photos?: Array<{ __typename?: 'ProductPhoto', id: string, url: string }> | null } };


export const FindAllProductsDocument = gql`
    query FindAllProducts($limit: Int, $offset: Int, $search: SearchProductParametersInput) {
  findAllProducts(limit: $limit, offset: $offset, search: $search) {
    id
    name
    price
    category
    averageRating
    photos {
      id
      url
    }
  }
}
    `;

/**
 * __useFindAllProductsQuery__
 *
 * To run a query within a React component, call `useFindAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useFindAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllProductsQuery, FindAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllProductsQuery, FindAllProductsQueryVariables>(FindAllProductsDocument, options);
      }
export function useFindAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllProductsQuery, FindAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllProductsQuery, FindAllProductsQueryVariables>(FindAllProductsDocument, options);
        }
export type FindAllProductsQueryHookResult = ReturnType<typeof useFindAllProductsQuery>;
export type FindAllProductsLazyQueryHookResult = ReturnType<typeof useFindAllProductsLazyQuery>;
export type FindAllProductsQueryResult = Apollo.QueryResult<FindAllProductsQuery, FindAllProductsQueryVariables>;
export const FindOneProductDocument = gql`
    query FindOneProduct($findOneProductId: String!) {
  findOneProduct(id: $findOneProductId) {
    id
    name
    price
    description
    isAvailable
    averageRating
    category
    rating {
      id
      description
    }
    photos {
      id
      url
    }
  }
}
    `;

/**
 * __useFindOneProductQuery__
 *
 * To run a query within a React component, call `useFindOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneProductQuery({
 *   variables: {
 *      findOneProductId: // value for 'findOneProductId'
 *   },
 * });
 */
export function useFindOneProductQuery(baseOptions: Apollo.QueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, options);
      }
export function useFindOneProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, options);
        }
export type FindOneProductQueryHookResult = ReturnType<typeof useFindOneProductQuery>;
export type FindOneProductLazyQueryHookResult = ReturnType<typeof useFindOneProductLazyQuery>;
export type FindOneProductQueryResult = Apollo.QueryResult<FindOneProductQuery, FindOneProductQueryVariables>;