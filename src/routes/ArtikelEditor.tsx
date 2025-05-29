import { useParams } from "react-router-dom";
import ArtikelEditorForm from "../components/Artikel/ArtikelEditorForm";

export default function ArtikelEditor() {
    const { slug } = useParams();
    return <div className="content w-100">
        <div className="banner-logo">
            <div>
                <img src="loog" alt="" />
                <h3 className="h3 text-center">
                    <span className="line">{slug ? 'Edit your article':'Write your article!'}</span>
                </h3>
            </div>
            <div className="border-container px-5 py-3 mx-3">
                <ArtikelEditorForm />
            </div>
        </div>
    </div>
}