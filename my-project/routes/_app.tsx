import { AppProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"

export default function({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>テストページ</title>
      </Head>
      <Component />
    </>
  )
}
