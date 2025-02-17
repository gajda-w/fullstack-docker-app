import { AddPepperForm } from "./forms/add-pepper-form";
import { PeppersList } from "./components/peppers-list";

export default async function Home() {
  return (
    <div className="space-y-6">
      <PeppersList />
      <AddPepperForm />
    </div>
  );
}
