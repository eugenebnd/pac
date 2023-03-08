function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(url, "*.internal.epo.org|*.speedtest.net") ||
        shExpMatch(url, "*.portal.azure.com|*.msftauth.net|*.msftauthimages.net|*.live.com|*.microsoftonline.com|*.azure.com") ||
        shExpMatch(url, "*://10.*"))
        return "SOCKS5 localhost:8888";
    // by default use no proxy
    return "DIRECT";
}
