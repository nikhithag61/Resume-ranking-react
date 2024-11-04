import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const AdjustCriteria = () => {
  const [criteria, setCriteria] = useState([
    { name: 'Experience', weight: 37 },
    { name: 'Skills', weight: 75 }
  ]);

  // Function to update slider values
  const updateSliders = (newCriteria) => {
    let totalValue = newCriteria.reduce((sum, item) => sum + item.weight, 0);

    if (totalValue > 100) {
      const adjustmentFactor = totalValue === 0 ? 0 : 100 / totalValue;
      return newCriteria.map(item => ({
        ...item,
        weight: Math.round(item.weight * adjustmentFactor)
      }));
    }
    return newCriteria;
  };

  const handleSliderChange = (index, newValue) => {
    const newCriteria = [...criteria];
    newCriteria[index].weight = parseInt(newValue);
    setCriteria(updateSliders(newCriteria));
  };

  return (
    <div className="flex items-center justify-center mt-8 bg-gray-50">
      <div className="w-full max-w-2xl mx-4 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Adjust Criteria Weights</h1>

        <div className="space-y-6">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-28 font-medium">{item.name}:</div>
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.weight}
                  onChange={(e) => handleSliderChange(index, e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="w-16 text-right">{item.weight}%</div>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => {
                  const newCriteria = criteria.filter((_, i) => i !== index);
                  setCriteria(newCriteria);
                }}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button 
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            onClick={() => {
              const newCriteria = [...criteria, { name: 'New Criteria', weight: 50 }];
              setCriteria(updateSliders(newCriteria));
            }}
          >
            Add Criteria
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Save and Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustCriteria;