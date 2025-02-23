"use cache";
import { lightThemeFlag, precomputeFlags } from "@/libs/flags";

type Props = {
  params: Promise<{ slug: string; code: string }>;
};

export async function generateStaticParams() {
  return [];
}

const SlugPage = async ({ params }: Props) => {
  const { code, slug } = await params;
  console.log("==> code", code, slug);
  const lightTheme = await lightThemeFlag(code, precomputeFlags);

  return (
    <div>
      SlugPage: {slug} {code} {lightTheme}
    </div>
  );
};

export default SlugPage;
