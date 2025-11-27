export default function Contact() {
    return (
        <section id="contact" className="w-full">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <h2 className="font-heading text-2xl mb-4">Contact</h2>
                <form className="flex flex-col gap-3">
                    <label className="flex flex-col">
                        <span className="text-sm text-(--muted)">Name</span>
                        <input className="mt-1 px-3 py-2 border rounded bg-(--surface)" type="text" name="name" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm text-(--muted)">Email</span>
                        <input className="mt-1 px-3 py-2 border rounded bg-(--surface)" type="email" name="email" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-sm text-(--muted)">Message</span>
                        <textarea className="mt-1 px-3 py-2 border rounded bg-(--surface)" rows={5} name="message" />
                    </label>
                    <div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
