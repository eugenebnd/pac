function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.internal.epo.org|*.speedtest.net|*.portal.azure.com"))
        return "SOCKS5 localhost:8888";

    // by default use no proxy
    return "DIRECT";
}