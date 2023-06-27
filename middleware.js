import { NextResponse } from "next/server";
import { default as appConfig } from "@/config/index";

String.prototype.countChar = function (c) {
  return this.split(c).length - 1;
};

export const config = {
  matcher: ["/", "/_sites/:path"],
};

export default async function middleware(req) {
  const url = req.nextUrl;
  console.log(url)
  const hostname = req.headers.get("host");
  console.log("hostname: " , hostname)
  console.log("hostname: " , hostname, "hostname.indexOf(appConfig.frontendUrl):" , hostname.indexOf(appConfig.frontendUrl))
  const isDomain = hostname.indexOf(appConfig.frontendUrl) === -1;
  console.log("isDomain:" , isDomain)
  console.log(appConfig.frontendUrl)
  const isSubdomain =
    !isDomain &&
    hostname.countChar(".") ===
      (process.env.NODE_ENV === "development" ? 1 : 2);
  console.log(process.env.NODE_ENV)
  console.log("countChar(.)",hostname.countChar("."))
  console.log("isSubdomain: ", isSubdomain)
  if (isDomain) {
    const host =
      hostname.indexOf("www.") !== -1
        ? hostname.slice(hostname.indexOf("www.") + 4)
        : hostname;
    console.log("hostname.indexOf(www.): ", hostname.indexOf("www."))
    const site = await fetch(
      `${appConfig.serverUrl}/api/website/getWebsiteByDomain?domain=${host}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `bearer ${process.env.CREATE_WEBSITE_TOKEN}`,
        },
      },
    );

    const siteRes = await site.json();
    console.log("siteRes: ", siteRes)
    if (!siteRes) {
      url.pathname = `/`
      return NextResponse.rewrite(url);
    }

    url.pathname = `/_sites/${siteRes.route}${url.pathname}`;
  }

  if (isSubdomain) {
    const subpath = hostname.slice(0, hostname.indexOf("."));

    if (!isDomain && subpath !== "www") {
      url.pathname = `/_sites/${subpath}${url.pathname}`;
    }
  }

  return NextResponse.rewrite(url);
}
