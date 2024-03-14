import { getTypes } from "@/lib/db/types";
import UploadForm from "./UploadForm";

export default async function Upload() {
    const types = await getTypes();
    return (
        <UploadForm types={types} />
    );
}