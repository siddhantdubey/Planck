# How deleting 11 lines of code broke the internet

status: posted

left-pad and kik

Let's talk about how deleting just 11 lines of code BROKE the internet.

Azer Koculu broke the internet for a brief period of time in 2016 by deleting his package "leftpad" from NPM, a package manager for javascript libraries. Leftpad doesn't do anything super hard, it just added padding to a string, something any programmer could do quickly on their own without using a library. But before we talk about what happened when it was deleted, let's talk about WHY it was deleted in the first place.

Azer Koculu had a package on NPM called Kik, that he was maintaining. Kik, as you probably know is also the name of a messaging app. Kik, the company was planning on making their own NPM package, and emailed Azer asking him to change the name of his package. Azer refused, stating that he was already working on a project. He said if they gave him 30k for the name, he'd change it. Kik then threatened legal action against Azer, and actually got NPM involved in the conversation. Without Azer agreeing, NPM renamed his package and gave the name Kik to the Kik messaging app. Azer was blindsided by this and claimed it to be against the spirit of open source and then said he would like NPM to take down all his packages from NPM, or he would do it himself. And he did take all 33 of his packages down. 

The most insignificant one in Azer's eyes ended up breaking the internet by being deleted. ReactJS, a javascript framework that many web apps use to construct their UI broke because it depended on something that depended on something else that depended on leftpad. Javascript dependencies are a very very very long chain and if any of the links get broken, it spells chaos. So when the simple package was deleted, it showed tons of developers the error message that leftpad was not in the npm registry, including to developers at Kik. NPM stepped in, and undeleted the package and the issue was quickly resolved. But, the modern web is interestingly fragile, and there's a lot of crazy things that could cause brief or long outages. Hit that follow button for more tech content.