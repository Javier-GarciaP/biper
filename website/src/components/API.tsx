import { Types } from "./Types";
import { Position } from "./Position";
import { OtherOptions } from "./OtherOptions";

export const API = () => {
    return (
        <section className="flex flex-col gap-4 border-l-4 border-gray-300 pl-4">
            <h2 className="text-4xl font-black text-gray-800 font-mono">API</h2>
            <div className="flex flex-col gap-16">

                <Types />
                <Position />
                <OtherOptions />
            </div>
        </section>
    )
}