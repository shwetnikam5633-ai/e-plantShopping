import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482877665-27a1c5b8b981?auto=format&fit=crop&w=400&q=80", description: "Releases oxygen during the night.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80", description: "Removes carbon monoxide and toxins.", cost: "$12" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=400&q=80", description: "Improves indoor air purity significantly.", cost: "$18" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80", description: "Naturally adds humidity and purifies air.", cost: "$14" },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80", description: "Broad leaves trap dust and airborne mold.", cost: "$20" },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=400&q=80", description: "Cleans formaldehyde while providing soothing gel.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=400&q=80", description: "Promotes deep relaxation and rest.", cost: "$16" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=400&q=80", description: "Produces fragrant and soothing white flowers.", cost: "$18" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80", description: "Fresh culinary herb with an invigorating smell.", cost: "$12" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80", description: "Zesty scent and versatile kitchen staple.", cost: "$10" },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=400&q=80", description: "Invigorating spa-like herbal aroma.", cost: "$22" },
        { name: "Basil", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80", description: "Sweet herbal aroma essential for home cooking.", cost: "$11" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  return (
