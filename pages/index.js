
import Head from "next/head";
import TradingJournalDashboard from "../components/TradingJournalDashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Balgo AI</title>
      </Head>
      <main className="p-4">
        <TradingJournalDashboard />
      </main>
    </>
  );
}
