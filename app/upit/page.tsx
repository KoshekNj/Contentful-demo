import Image from "next/image";

import { Environment, createClient } from "contentful-management";

export default function Page() {
  // Action
  async function create(formData: FormData) {
    "use server";
    const test = createClient({
      accessToken: "CFPAT-QvI2kqJoC7oP8muMAMPEa357rQt7R4WSpcwwbaP7CIc",
    });
    const rawFormData = {
      ime: formData.get("ime"),
      prezime: formData.get("prezime"),
      upit: formData.get("upit"),
    };
    test.getSpace("sbo757x1maq7").then((space) => {
      space
        .getEnvironment("master")
        .then(async (environment: Environment) => {
          // # 3 Create Entry
          return environment.createEntry("forma", {
            fields: {
              ime: {
                "en-US": "dffd",
              },
              prezime: {
                "en-US": "dffd",
              },
              upit: {
                "en-US": "dffd",
              },
            },
          });
        })
        .then((asset) => console.log(asset))
        .catch(console.error);
    });
  }
  // Invoke the action using the "action" attribute
  return (
    <form action={create}>
      <input type="text" name="ime" className="block m-5 text-black"></input>
      <input
        type="text"
        name="prezime"
        className="block m-5 text-black"
      ></input>
      <input type="text" name="upit" className="block m-5 text-black"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
