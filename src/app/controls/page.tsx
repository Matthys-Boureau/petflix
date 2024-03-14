import ControlsList from "@/components/ControlsList/ControlsList";
import { getControls } from "@/lib/db/controls";

export default async function Controls() {
    const controls = await getControls();
    return (
        <ControlsList controls={controls} />
    )
}