import { Types } from "./Types";
import { Position } from "./Position";
import { OtherOptions } from "./OtherOptions";

export const API = () => {
    return (
        <section className="flex flex-col gap-6 md:border-l-4 md:border-gray-200 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 font-mono">API</h2>
            <div className="flex flex-col gap-16">

                <Types />
                <Position />
                <OtherOptions />
            </div>
        </section>
    )
}