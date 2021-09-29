// import express module
const express = require("express");
const bcrypt = require("bcrypt");
// to access into images folder
const path = require("path");
// node module for upload
const multer = require("multer");
// import body parser module
const bodyParser = require("body-parser");
// create express application
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// import mongoose
const mongoose = require("mongoose");
// Connect to DB named soccerDB on port 27017
mongoose.connect("mongodb://localhost:27017/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/images", express.static(path.join("backend/images")));
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

// import Match model
const Match = require("./models/match");
const Player = require("./models/player");
const User = require("./models/user");
const Stadium = require("./models/stadium");
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// / : http://localhost:3000
app.get("/api/myMatches", (req, res) => {
  console.log("Here in BE allMatches");
  // Connect to DB
  Match.find((err, documents) => {
    if (err) {
      console.log("Err in CNX with DB");
    } else {
      res.status(200).json({
        message: "OK, here all objects",
        matches: documents,
      });
    }
  });
});

app.get("/api/allPlayers", (req, res) => {
  console.log("Here in BE All Players");
  // Connect to DB
  Player.find((err, documents) => {
    if (err) {
      console.log("Err in CNX with DB", err);
    } else {
      res.status(200).json({
        message: "OK, here all players",
        players: documents,
      });
    }
  });
});

app.get("/myStadiums", (req, res) => {
  console.log("Here in BE All stadiums");
  // Connect to DB
  Stadium.find((err, documents) => {
    if (err) {
      console.log("Err in CNX with DB", err);
    } else {
      res.status(200).json({
        message: "OK, here all stadiums",
        stadiums: documents
      });
    }
  });
});

app.post("/addStadium", (req, res) => {
  console.log('here stadium', req.body);
  const stadium = new Stadium({
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity

  });
  stadium.save().then(
    data => {
      if (data) {
        res.status(200).json({
          message: 'Added'
        })
      }
    }
  );
});

app.post("/api/addMatch", (req, res) => {
  const match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    logoOne: req.body.logoOne,
    logoTwo: req.body.logoTwo,
  });
  match.save();
});

app.post("/api/addPlayer",multer({ storage: storage }).single('image'), (req, res) => {
  url = req.protocol + '://' + req.get('host');
  const player = new Player({
    name: req.body.name,
    poste: req.body.poste,
    description: req.body.description,
    dateOfBirth: req.body.dateOfBirth,
    image: url + '/images/' + req.file.filename
  });
  player.save().then((result) => {
    if (result) {
      res.status(200).json({
        message: "Player Added successfully",
      });
    }
  });
});
app.delete("/api/deleteMatch/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Deleted Successfully",
    })
  );
});

app.delete("/deleteStadium/:id", (req, res) => {
  Stadium.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Deleted Successfully",
    })
  );
});

app.get("/api/getMatch/:id", (req, res) => {
  Match.findOne({ _id: req.params.id }).then((document) => {
    res.status(200).json({
      match: document,
    });
  });
});

app.get("/api/getPlayer/:id", (req, res) => {
  Player.findOne({ _id: req.params.id }).then((document) => {
    res.status(200).json({
      player: document,
    });
  });
});

app.put("/api/editPlayer/:id", (req, res) => {
  const player = new Player({
    _id: req.body._id,
    name: req.body.name,
    poste: req.body.poste,
    dateOfBirth: req.body.dateOfBirth,
    image: req.body.image,
    description: req.body.description,
  });

  Player.update({ _id: req.params.id }, player).then((result) => {
    if (result) {
      res.status(201).json({
        message: "Updated successfully",
      });
    } else {
      console.log("here error");
    }
  });
});

app.post("/api/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
      tel: req.body.tel,
      role: req.body.role,
    });
    user.save().then((err) => {
      console.log('result',err);
        res.status(200).json({
          message: "Added successfully",
        });
    });
  });
});

app.get("/api/allUsers", (req, res) => {
  User.find((err, documents) => {
    if (err) {
      console.log("Err in CNX with DB", err);
    } else {
      res.status(200).json({
        message: "OK, here all players",
        users: documents,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((data) => {
      console.log("data", data);
      if (!data) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.pwd, data.pwd);
    })
    .then((result) => {
      if (!result) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((findedUser) => {
        const userToSend = {
          role: findedUser.role,
          firstName: findedUser.firstName,
          lastName: findedUser.lastName,
        };
        res.status(200).json({
          message: "2",
          user: userToSend,
        });
      });
    });
});

app.get('/api/search/:name', (req,res) => {
  Player.find({ name: req.params.name }).then(
    result => {
      console.log('Here searched result', result);
      if (result) {
        res.send(result);
      }
    }
  )

});

app.get('/myReservations/:id' ,(req,res) => {
  Player.find({_id: req.params.id}).then(
    data => {
      if (data) {
        res.status(200).json({
          allReservations:data
        })
      }
    }
  )
})

module.exports = app;
