import styled from '@emotion/styled'
import { useState } from 'react'

import { ProductsExampleQuery, useProductsExampleQuery } from '../graphql/graphql'

const Button = styled.button`
  background-color: #555;
  border: 0;
  color: #fafafa;
  padding: 8px 24px;
`

const Ul = styled.ul`
  display: grid;
  grid-gap: 40px 0;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
`

const Li = styled.li`
  background-color: #fafafa;
  margin: 0 20px;
  padding: 0;
  width: 400px;
`

const Img = styled.img`
  width: 100%;
`

type State = {
  data?: ProductsExampleQuery
}

const ProductExampleCSRComponent = () => {
  const [state, setState] = useState<State>({ data: undefined })

  const { data, loading, refetch } = useProductsExampleQuery({
    variables: {
      productCount: 1
    },
  })

  if (!loading && !data) {
    setState({ data })
  }

  const onMoreDataButtonClicked = async () => {
    const { data } = await refetch({
      productCount: 200
    })

    setState({ data })
  }

  return <>
    <Button onClick={onMoreDataButtonClicked}>Fetch More Items</Button>
    {
      data ?
        <Ul>
          {
            data.products.edges.map(({ node }) =>
              <Li key={node.id}>
                <article>
                  <Img
                    alt={node.images.edges[0].node.altText}
                    src={node.images.edges[0].node.originalSrc} />
                  <h2>
                    {node.title}
                  </h2>
                  <p>{node.description}</p>

                </article>
              </Li>
            )}
        </Ul>
        : <div>loading...</div>
    }
  </>
}

export default ProductExampleCSRComponent