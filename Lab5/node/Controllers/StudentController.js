const Student = require("./../Models/StudentSchema");
const Department = require("./../Models/DepartmentSchema");
exports.getAllStudent = (request, response) => {
  Student.find({}).populate({ path: "department" })
    .then(data => {
      response.status(200).json(data)
    })
    .catch(error => {
      next(error);
    })
}

exports.getStudent = (request, response) => {

  Student.findOne({ _id: request.params.id }).populate({ path: "department" })
    .then(data => {
      if (data == null) next(new Error("Student id not Found"))

      response.status(200).json(data)
    })
    .catch(error => {
      next(error);
    })
}
exports.createStudent = (request, response, next) => {
  console.log("inside");
  let object = new Student({
    _id: request.body._id,
    name: request.body.name,
    department: request.body.department,
    image: "http://localhost:8080/images/"
  })
  object.save()
    .then(data => {
      console.log("dddd");
      Student.findById(data._id).populate({ path: "department" })
        .then(data => {
          response.status(201).json(data)

        });
    })
    .catch(error => next(error))
}

exports.updateStudent = (request, response, next) => {
  Student.findByIdAndUpdate(request.params.id, {
    $set: {
      name: request.body.name,
      department: request.body.department,
      image: "default.png"
    }
  })
    .then(data => {
      if (data == null) throw new Error("Student Is not Found!")
      Student.findById(data._id).populate({ path: "department" })
        .then(data => {
          response.status(200).json(data)

        });

    })
    .catch(error => next(error))
}

exports.deleteStudent = (request, response, next) => {
  Student.findByIdAndDelete(request.params.id)
    .then(data => {
      if (data == null) throw new Error("Student Is not Found!")
      response.status(200).json({ message: "deleted" })

    })
    .catch(error => {
      console.log(error.message)
      return next(error)
    })
}




