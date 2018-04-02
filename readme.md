# Page ID Bookmarklet

Bookmarklet that returns a string of text that uniquely identifies the current webpage. The string can be used as **a roughly self-source-citing filename**, helpful for naming media files saved from the web: images, video, audio, etc.

Generally the author is the first part of the string, to help you group items by author.

## Supported webpages

| Page | String |
| --- | --- |
| Reddit post | [username] [post ID] |
| Reddit comment | [username] [post ID] [comment ID] |
| YouTube | [channel name] [video ID] [video title] |
| DeviantArt | [url with `/` each replaced with a space] |
| Instagram\* | [username] [post ID] |
| Facebook | [name] [url with `www.facebook.com`, `/`, and `?` each replaced with a space] |

_\* After exiting the bookmarklet prompt, you will immediately be taken to the direct URL of the media file.**_

_\** Why? Because this site does not let you to easily save the media file from your browser via right-click > Save._

## How to add to your browser

1. Copy everything in **pageid.js**.
1. Paste into your favourite JS minifier (I use [DuckDuckGo's](https://duckduckgo.com/?q=javascript+minify&ia=answer)), and copy the minified code.
1. Create a new bookmark on the bookmarks bar of your browser. You should see a dialog box.
1. Paste the code in the URL/location field.
1. Enter whatever you like in the name field, e.g. "id".
1. Done/OK.

## How to use

1. Go to a single media page (not a front page, news feed, etc.) that this bookmarklet supports.
1. Click on the bookmarklet. You've got a page ID string.
1. Press Ctrl-x or Ctrl-c to copy the selected string.
1. Press either Enter/Esc or click either OK/Cancel, doesn't matter.
1. Do as you wish with the copied string!

## TODO

* Context (i.e. the site name) and non-context versions?
* Check if anything's broken after all these years
