There are four Wow.exe files, the ones with the _ symbol in front of them can load WoD models (not included in the downloaded package).

Use your Stormforge username to log in, not your e-mail!

If you want to download a language pack, edit your WTF/config.wtf file, in the row that says SET locale "enUS". You can pick any of the following: koKR, frFR, deDE, zhCN, zhTW, ruRU, ptBR, itIT, esES, esMX

If you encounter an issue with the locale download, open your Wow.mfil file, delete its contents, and replace them with the following:

version=2
server=akamai
	location=http://dist.blizzard.com.edgesuite.net/wow-pod-retail/NA/15890.direct/
manifest_partial=wow-18414-447E3E618F731CCBF4F7D2C4E56C5644.mfil



After this, you need to save the Wow.mfil and MAKE IT READ ONLY.