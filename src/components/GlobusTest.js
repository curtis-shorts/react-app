import { transfer } from "@globus/sdk";
import { authorization } from "globus/sdk";

const manager = authorization.create();


const result = await (
  await globus.transfer.endpointSearch(
    {
       query: { filter_fulltext: "Globus Tutorial" },
       headers: {
         Authorization: "Bearer MY_ACCESS_TOKEN",
       },
    },
    {
      fetch: {
        // Provide parameters to the underlying `fetch` call.
        // https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
        options: {
          priority: "high"
        },
      },
    }
  )
).json();
