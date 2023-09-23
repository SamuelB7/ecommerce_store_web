import * as Types from './graphql';

import gql from 'graphql-tag';
import { NextRouter } from 'next/router'
import { useRouter } from 'next/navigation'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '@/apollo';
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
export async function getServerPageFindAllProducts
  (options: Omit<Apollo.QueryOptions<Types.FindAllProductsQueryVariables>, 'query'>, ctx?: any) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.FindAllProductsQuery>({ ...options, query: FindAllProductsDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useFindAllProducts = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.FindAllProductsQuery, Types.FindAllProductsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(FindAllProductsDocument, options);
};
export type PageFindAllProductsComp = React.FC<{ data?: Types.FindAllProductsQuery, error?: Apollo.ApolloError }>;
export const ssrFindAllProducts = {
  getServerPage: getServerPageFindAllProducts,

  usePage: useFindAllProducts,
}
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
export async function getServerPageFindOneProduct
  (options: Omit<Apollo.QueryOptions<Types.FindOneProductQueryVariables>, 'query'>, ctx?: any) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.FindOneProductQuery>({ ...options, query: FindOneProductDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useFindOneProduct = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.FindOneProductQuery, Types.FindOneProductQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(FindOneProductDocument, options);
};
export type PageFindOneProductComp = React.FC<{ data?: Types.FindOneProductQuery, error?: Apollo.ApolloError }>;
export const ssrFindOneProduct = {
  getServerPage: getServerPageFindOneProduct,

  usePage: useFindOneProduct,
}