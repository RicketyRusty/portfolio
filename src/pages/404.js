import Button from "@/components/Button";
import { useRouter } from "next/router";
export default function Custom404() {
    const router = useRouter();
    return(
    <>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="pb-8 text-2xl laptop:text-6xl">Error 404 😵‍💫</p>
          <p className="py-8 text-xl laptop:text-4xl">Looks like you've taken a wrong turn</p>
          <Button type="primary" onClick={() => router.push("/")}>Go To Home</Button>  
        </div>
    </>     
    ) 
}