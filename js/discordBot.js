function discordMessage() {
const webHookURL = 'https://discord.com/api/webhooks/1272962899320508488/4PMmt-UYGZ71xZNsDE8qdFLXytVDhGHKRNpxYY7cOsYpNbD_xRM41IMt3QORFHJSHWOz'

fetch(webHookURL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'Marketplace New Listing Bot',
      // the avatar to be displayed
      avatar_url:
        'https://blue0x.com/_next/static/media/logo.4c5cefd2.png',
      // contents of the message to be sent
      content:
        '',
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'Blue0x Marketplace',
            url: 'https://blue0x.com',
            icon_url: 'https://blue0x.com/_next/static/media/logo.4c5cefd2.png',
          },
          // embed title
          // - link on 2nd row
          title: 'Gaming PC',
          url:
            '',
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url:
              '',
          },
          // embed description
          // - text on 3rd row
          description: 'Great PC. Plays all the latest games!',
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: 'Price',
              value: '$599',
            },
            {
              name: 'City',
              value: 'Orlando, FL',
            },
          ],
          // image
          // - picture below description(and fields)
          image: {
            url:
            'https://cdn.prod.website-files.com/6506e01c107238bf78e07f19/654a2a5a5031d2d1467e4011_ella-don-JomkRNkzKhE-unsplash.jpg',
          },
          // footer
          // - icon next to text at bottom
          footer: {
            text: 'footer',
            icon_url:
              'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
        },
      ],
    }),
  }
); 
}