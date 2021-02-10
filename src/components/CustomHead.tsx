import Head from 'next/head'

interface CustomHeadProps {
  metaTitle: string;
  metaDescription: string;
  metaImage?: string;
}

export default function CustomHead({ metaTitle, metaDescription, metaImage='', }: CustomHeadProps) {

  const baseTitle: string = 'Ron Cheong - '
  const baseDescription: string = `
    ron cheong shiu hong personal portfolio site
    singapore university of social sciences suss
    shopee regional finance automation
    solar ai solarai software engineer engineering
    quant quantitative finance math algorithmic trading portfolio optimisation
    python javascript 
    frontend backend full stack full-stack developer django react reactjs next nextjs chakra chakraui chakra-ui graphql
    typescript postgresql sql query queries graphql rest restful api apis
  `

  return (
    <Head>
      <title>{baseTitle + metaTitle}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={metaDescription + baseDescription} />
      {
        Boolean(metaImage) && 
        <meta property='og:image' content={metaImage} />
      }
    </Head>
  )
}