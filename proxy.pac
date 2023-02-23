function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(url, "*.internal.epo.org|*.speedtest.net|*.portal.azure.com|*.microsoftonline.com") ||
        shExpMatch(url,"*://172.1*") ||
        shExpMatch(url,"*://172.2*") ||
        shExpMatch(url,"*://172.30.*") ||
        shExpMatch(url,"*://172.31.*") ||
        shExpMatch(url,"*://145.64.126.*") ||
        shExpMatch(url,"*://145.64.129.*") ||
        shExpMatch(url,"*://145.64.136.*") ||
        shExpMatch(url,"*://192.168.*") ||
        shExpMatch(url,"*://10.*"))
        return "SOCKS5 localhost:8888";
    // by default use no proxy
    return "DIRECT";
}