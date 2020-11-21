import React from 'react';

const Checkbox = () => {
    return (
    <div className="bg-gray-200 max-h-full">
        <div className="justify-center h-screen">
            <div className="max-h-full">
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-teal-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" /><span className="ml-2 text-gray-700">label</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" /><span className="ml-2 text-gray-700">label</span>
                </label>
            </div>
        </div>
    </div>
    );
}
export default Checkbox;