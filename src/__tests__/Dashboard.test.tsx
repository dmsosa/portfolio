import { render, screen } from "@testing-library/react"
import BenutzerInfo from "../components/Benutzer/BenutzerInfo";

import { BrowserRouter } from "react-router-dom";
import {  defaultBenutzer } from "../data/artikel.data";

let user = defaultBenutzer;
describe('Avatar testen', () => {
    it('sollte gestreckt sein', () => {
        render(
        
        <BrowserRouter>
            <BenutzerInfo benutzer={user} />
        </BrowserRouter>
        )
        expect(screen.getByText('Follow: ')).toBeInTheDocument();
    })
    it('should', () => {
        
    })
})