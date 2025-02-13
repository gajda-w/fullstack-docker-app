import { Suspense } from "react";
import { PepperList, PepperListSkeleton } from "../../components/pepper-list";

export default async function Home() {
  return (
    <Suspense fallback={<PepperListSkeleton />}>
      <PepperList />
    </Suspense>
  );
}
