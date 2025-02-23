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
  const lightTheme = await lightThemeFlag(code, precomputeFlags);
  console.log("==> SlugPage", { lightTheme, slug, code });

  return (
    <div>
      SlugPage: {slug} {lightTheme ? "true" : "false"} {code}
    </div>
  );
};

export default SlugPage;
