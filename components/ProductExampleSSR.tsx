import styled from '@emotion/styled'
import { ProductsExampleQuery } from '../graphql/graphql'

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

type Props = {
  ssrData: ProductsExampleQuery
}

const ProductExampleSSRComponent = ({ ssrData }: Props) => {

  return <>
    {
      ssrData ?
        <Ul>
          {
            ssrData.products.edges.map(({ node }) =>
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

export default ProductExampleSSRComponent