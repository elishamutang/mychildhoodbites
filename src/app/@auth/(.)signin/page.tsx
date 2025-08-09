import SignIn from "@/components/signInForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default async function Page() {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="sm:max-w-[425px] font-inter">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-5xl font-bold text-center">
            <span className="text-blue-600">Sign</span>{" "}
            <span className="text-green-600">In.</span>
          </DialogTitle>
          <DialogDescription className="text-center mb-5">
            Take a trip down memory lane.
          </DialogDescription>
          <SignIn className="p-0 md:w-full border-none" />
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
