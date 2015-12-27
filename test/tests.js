"use strict";

/* global it  */

var shacrypt = require('../shacrypt');

var tests256 = [
    ["$5$saltstring", "Hello world!",
        "$5$saltstring$5B8vYYiY.CVt1RlTTf8KbXBH3hsxY/GNooZaBBGWEc5"
    ],

    ["$5$rounds=10000$saltstringsaltstring", "Hello world!",
        "$5$rounds=10000$saltstringsaltst$3xv.VbSHBb41AL9AvLeujZkZRBAwqFMz2.opqey6IcA"
    ],

    ["$5$rounds=5000$toolongsaltstring", "This is just a test",
        "$5$rounds=5000$toolongsaltstrin$Un/5jzAHMgOGZ5.mWJpuVolil07guHPvOW8mGRcvxa5"
    ],

    ["$5$rounds=1400$anotherlongsaltstring",
        "a very much longer text to encrypt.  This one even stretches over morethan one line.",
        "$5$rounds=1400$anotherlongsalts$Rx.j8H.h8HjEDGomFU8bDkXm3XIUnzyxf12oP84Bnq1"
    ],

    ["$5$rounds=77777$short",
        "we have a short salt string but not a short password",
        "$5$rounds=77777$short$JiO1O3ZpDAxGJeaDIuqCoEFysAe1mZNJRs3pw0KQRd/"
    ],

    ["$5$rounds=123456$asaltof16chars..", "a short string",
        "$5$rounds=123456$asaltof16chars..$gP3VQ/6X7UUEW3HkBn2w1/Ptq2jxPyzV/cZKmF/wJvD"
    ],

    ["$5$rounds=10$roundstoolow", "the minimum number is still observed",
        "$5$rounds=1000$roundstoolow$yfvwcWrQ8l/K0DAWyuPMDNHpIVlTQebY9l/gL972bIC"
    ],
];

var tests512 = [
    ["$6$saltstring", "Hello world!",
        "$6$saltstring$svn8UoSVapNtMuq1ukKS4tPQd8iKwSMHWjl/O817G3uBnIFNjnQJuesI68u4OTLiBFdcbYEdFCoEOfaS35inz1"
    ],

    ["$6$rounds=10000$saltstringsaltstring", "Hello world!",
        "$6$rounds=10000$saltstringsaltst$OW1/O6BYHV6BcXZu8QVeXbDWra3Oeqh0sbHbbMCVNSnCM/UrjmM0Dp8vOuZeHBy/YTBmSK6H9qs/y3RnOaw5v."
    ],

    ["$6$rounds=5000$toolongsaltstring", "This is just a test",
        "$6$rounds=5000$toolongsaltstrin$lQ8jolhgVRVhY4b5pZKaysCLi0QBxGoNeKQzQ3glMhwllF7oGDZxUhx1yxdYcz/e1JSbq3y6JMxxl8audkUEm0"
    ],

    ["$6$rounds=1400$anotherlongsaltstring",
        "a very much longer text to encrypt.  This one even stretches over morethan one line.",
        "$6$rounds=1400$anotherlongsalts$POfYwTEok97VWcjxIiSOjiykti.o/pQs.wPvMxQ6Fm7I6IoYN3CmLs66x9t0oSwbtEW7o7UmJEiDwGqd8p4ur1"
    ],

    ["$6$rounds=77777$short",
        "we have a short salt string but not a short password",
        "$6$rounds=77777$short$WuQyW2YR.hBNpjjRhpYD/ifIw05xdfeEyQoMxIXbkvr0gge1a1x3yRULJ5CCaUeOxFmtlcGZelFl5CxtgfiAc0"
    ],

    ["$6$rounds=123456$asaltof16chars..", "a short string",
        "$6$rounds=123456$asaltof16chars..$BtCwjqMJGx5hrJhZywWvt0RLE8uZ4oPwcelCjmw2kSYu.Ec6ycULevoBK25fs2xXgMNrCzIMVcgEJAstJeonj1"
    ],

    ["$6$rounds=10$roundstoolow", "the minimum number is still observed",
        "$6$rounds=1000$roundstoolow$kUMsbe306n21p9R.FRkW3IGn.S9NPN0x50YhH1xhLsPuWGsUSklZt58jaTfF4ZEQpyUNGc0dqbpBYYBaHHrsX."
    ],
];

tests256.forEach(function(test) {
    it(test[1], function() {
        shacrypt.sha256crypt(test[1], test[0]).should.be.eql(test[2]);
    });
});

tests512.forEach(function(test) {
    it(test[1], function() {
        shacrypt.sha512crypt(test[1], test[0]).should.be.eql(test[2]);
    });
});
