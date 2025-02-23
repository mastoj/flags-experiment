"use cache";
import { lightThemeFlag, precomputeFlags } from "@/libs/flags";

type Props = {
  params: Promise<{ slug: string; code: string }>;
};

export async function generateStaticParams() {
  return [];
}

const SlugPage = async ({ params }: Props) => {
  const { code } = await params;
  const lightTheme = await lightThemeFlag(code, precomputeFlags);

  return <div>SlugPage: {lightTheme}</div>;
};

export default SlugPage;
