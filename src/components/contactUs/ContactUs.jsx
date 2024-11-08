import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <section className="bg-[#ffe5b2ef]">
        <div className="container p-10 mx-auto flex flex-col md:flex-row rounded-xl">
          <div className="md:w-5/12 py-10 flex text-center flex-col justify-center items-center">
            <h1
              data-aos="fade-up"
              className="text-[32px] font-bold leading-[56px]"
            >
              Get in touch with us
            </h1>
            <p data-aos="fade-up" className="mt-20px leading-8 text-[20px]">
              We know that sometimes a personal conversation is the best
              solution. If you need immediate support or have specific
              questions, don&apos;t hesitate to call or email us. Our dedicated
              team is available to discuss your concerns and help you further.
            </p>
          </div>
          <div className="md:w-7/12 py-10 flex justify-center items-center">
            <form
              data-aos="fade-up"
              className="flex w-full max-w-md flex-col gap-4 "
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@yahoo.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput id="password2" type="password" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                  id="repeat-password"
                  type="password"
                  required
                  shadow
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree" className="flex">
                  I agree with the&nbsp;
                  <Link href="#" className="text-yellow-500 hover:underline">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="bg-yellow-500 hover:bg-black">
                Register new account
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
