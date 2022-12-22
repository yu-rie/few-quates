import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
	`fresh`へようこそ。/routes/index.tsx でこのメッセージを更新できます。<br/>
	ファイルを更新してください。
        </p>
        <Counter start={5} />
      </div>
    </>
  );
}
