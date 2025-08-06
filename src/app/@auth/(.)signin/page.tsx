import GoogleSignIn from "@/components/googleSignIn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default async function Page({ params }: { params: Promise<object> }) {
  const test = await params;
  console.log(test);

  return (
    <Dialog defaultOpen={true}>
      <form className="hidden absolute">
        <DialogContent className="sm:max-w-[425px] font-inter">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-5xl font-bold text-start md:text-center">
              <span className="text-blue-600">Sign</span>{" "}
              <span className="text-green-600">In.</span>
            </DialogTitle>
            <DialogDescription className="text-center">
              Take a trip down memory lane.
            </DialogDescription>

            <form className="w-full md:mb-10 rounded-md flex flex-col gap-4">
              <section className="flex flex-col">
                <label htmlFor="email" className="font-bold text-blue-600">
                  Email
                </label>
                <input
                  className="border p-2 text-blue-600"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="password" className="font-bold text-blue-600">
                  Password
                </label>
                <input
                  className="border p-2 text-blue-600"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="my_very_secure_password"
                  required
                />
              </section>

              <button
                type="submit"
                className="border cursor-pointer transition duration-150 py-1 border-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 text-green-600 focus:text-white rounded-sm font-bold"
                style={{ fontWeight: "bold" }}
              >
                Submit
              </button>

              {/* Alternative providers */}
              <section>
                <GoogleSignIn />
              </section>
            </form>
          </DialogHeader>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
