const db = require('../data/db-config')

module.exports = 
{
    find,
    findById,
    findSteps,
    add,

}

function find()
{
    return db('schemes')
        .then(schemes =>
            {
                return schemes
            })
}

function findById(id)
{
    return db('schemes')
        .where({id})
            .then(scheme => scheme)
}

function findSteps(id)
{
    
    return db('steps as s')
        .join('schemes as sch', 's.scheme_id', '=', 'sch.id')
        .where({scheme_id: id})
        .select('s.id', 'sch.scheme_name', 's.step_number', 's.instructions')
        .orderBy('step_number')
            .then(steps => steps)
}

function add(scheme)
{
    return db('schemes')
        .insert(scheme, ['id', 'scheme_name'])
            .then(newScheme => newScheme)
}